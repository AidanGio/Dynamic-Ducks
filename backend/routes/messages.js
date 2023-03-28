import express from "express";
import {
    getAllMessages,
    getMessage,
    getUnreadMessages,
    createMessage,
    deleteMessage,
    updateMessage
} from "../data/messages.js";

const router = express.Router();

// get all messages
router.get("/", async (req, res) => {
    try {
        const result = await getAllMessages(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get a single message
router.get("/id/:id", async (req, res) => {
    try {
        const result = await getMessage(req, res);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get unread messages
router.get("/unread", async (req, res) => {
    try {
        const result = await getUnreadMessages(req, res);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// create a message
router.post("/", async (req, res) => {
    try {
        const result = await createMessage(req,res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete a message
router.delete("/:id", async (req, res) => {
    try {
        const result = await deleteMessage(req,res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update a message
router.patch("/:id", async (req, res) => {
    try {
        const result = await updateMessage(req,res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
