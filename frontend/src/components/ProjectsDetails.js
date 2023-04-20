import { Link } from 'react-router-dom';

const ProjectsDetails = ({ project }) => {

    const handleClick = async () => {
        const response = await fetch('http://localhost:5000/projects/' + project._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        window.location.reload()
    }


    return (
        <><div className="project-details">
            <h4>{project.name}</h4>
            <p><strong>Start Date: </strong>{project.startDate}</p>
            <p><strong>End Date: </strong>{project.endDate}</p>
            <p><strong>Progress: </strong>{project.progress}</p>
            <p><strong>Status: </strong>{project.status}</p>
            <p><strong>Billing Status: </strong>{project.billingStatus ? 'Paid' : 'Unpaid'}</p>
            <p><strong>Permit Status: </strong>{project.permitStatus ? 'Permit Obtained' : 'Permit not obtained'}</p>
            <p><strong>Labor Hours: </strong>{project.laborHours}</p>
            <p><strong>Material Details: </strong>{project.materialDetails}</p>
            <p><strong>Solar System Info: </strong>{project.solarSystemInfo}</p>
            <p><strong>Inspection Info: </strong>{project.inspectionInfo}</p>
            <p><strong>Close Out Info: </strong>{project.closeOutInfo}</p>
            <div>
                <Link to={`/projects/${project._id}/edit`}><strong>Update Project</strong></Link>                
                <span onClick={handleClick}>Delete</span>
            </div>
        </div></>
    )
}

export default ProjectsDetails