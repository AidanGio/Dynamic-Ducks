import { photos } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import formidable from 'formidable';
import { Upload } from '@aws-sdk/lib-storage';
import { DeleteObjectCommand, S3Client} from '@aws-sdk/client-s3';
import { Transform } from 'stream';
// import * as dotenv from 'dotenv';

// dotenv.config();

const accessKeyId = "AKIA2KAQNJV7QN2WWCDU";
const secretAccessKey = "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";
const region = "us-east-1";
const Bucket = "dynamicducks";

/*
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;
*/

// get all photos under project (user id)
const getPhotos = async (req, res) => {
  let photoCollection;
  try {
    photoCollection = await photos();
  } catch (error) {
    console.log(error);
  }
  
  const {id} = req.params

  const query = { userId: id };

  try {
      const allPhotos = await photoCollection.find(query).toArray();
      var allPhotosURL  = allPhotos .filter(e =>
        e = e.url
      );
      return allPhotosURL;
  } catch (error) {
      console.log(error)
  }
};

// create Photo
const createPhoto = async (req, id) => {
  let photoCollection;
  let data = await uploadFile(req);
  let uploadPhoto = {
    userId: id,
    url: data.Location
  }
  try {
    photoCollection = await photos();
  } catch (error) {
    console.log(error);
  }
  let result
  try {
      result = await photoCollection.insertOne( uploadPhoto )
  } catch(error) {
      console.log(error)
  }
  return result
};

const deleteFile = async (req) => {
    const client = new S3Client({});
    const command = new DeleteObjectCommand({
        Bucket: Bucket,
        Key: req,
      });
      try {
        const response = await client.send(command);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
}

const uploadFile = async (req) => {
    console.log(req);
    return new Promise((resolve, reject) => {
        let options = {
            maxFileSize: 100 * 1024 * 1024, //100 megabytes converted to bytes,
            allowEmptyFiles: false
        }

        const form = formidable(options);
        // method accepts the request and a callback.
        form.parse(req, (err, fields, files) => {
            console.log(fields, "====", files)
        });

        form.on('error', error => {
            reject(error.message)
        })

        form.on('data', data => {
            if (data.name === "complete") {
                // let statuscode = data.value['$metadata']?.httpStatusCode || 200;
                resolve(data.value);
            }
        })

        form.on('fileBegin', (formName, file) => {

            file.open = async function () {
                this._writeStream = new Transform({
                    transform(chunk, encoding, callback) {
                        callback(null, chunk)
                    }
                })

                this._writeStream.on('error', e => {
                    form.emit('error', e)
                });

                // upload to S3
                new Upload({
                    client: new S3Client({
                        credentials: {
                            accessKeyId,
                            secretAccessKey
                        },
                        region
                    }),
                    params: {
                        ACL: 'public-read',
                        Bucket,
                        Key: `${Date.now().toString()}-${this.originalFilename}`,
                        Body: this._writeStream
                    },
                    tags: [], // optional tags
                    queueSize: 4, // optional concurrency configuration
                    partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
                    leavePartsOnError: false, // optional manually handle dropped parts
                })
                    .done()
                    .then(data => {
                        form.emit('data', { name: "complete", value: data });
                    }).catch((err) => {
                        form.emit('error', err);
                    })
            }

            file.end = function (cb) {
                this._writeStream.on('finish', () => {
                    this.emit('end')
                    cb()
                })
                this._writeStream.end()
            }
        })
    })
}

export {uploadFile, deleteFile, createPhoto}
