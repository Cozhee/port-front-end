import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NewProjectModal({ handleAddProject }) {

    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newGithubLink, setNewGithubLink] = useState('')
    const [newLiveLink, setNewLiveLink] = useState('')
    const [newPurpose, setNewPurpose] = useState('')
    const [newProblems, setNewProblems] = useState('')
    const [newLessons, setNewLessons] = useState('')
    const [newDisplayDescription, setNewDisplayDescription] = useState('')

    const newProject = {
        newTitle,
        newDescription,
        newGithubLink,
        newLiveLink,
        newPurpose,
        newProblems,
        newLessons,
        newDisplayDescription
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '85vh',
        minWidth: '80%',
        backgroundColor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll'
    };

    return (
        <Box sx={style}>
            <Box my={5}>
                <Typography variant="overline" component="h2">
                    Project Title
                </Typography>
                <TextField
                    value={newTitle}
                    fullWidth
                    variant="outlined"
                    size="small"
                    onChange={(e) => setNewTitle(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Description
                </Typography>
                <TextField
                    value={newDescription}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Github
                </Typography>
                <TextField
                    value={newGithubLink}
                    fullWidth
                    variant="outlined"
                    size="small"
                    onChange={(e) => setNewGithubLink(e.target.value)}
                />
                <Typography variant="overline">
                    Hosted Live
                </Typography>
                <TextField
                    value={newLiveLink}
                    fullWidth
                    variant="outlined"
                    size="small"
                    onChange={(e) => setNewLiveLink(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Purpose
                </Typography>
                <TextField
                    value={newPurpose}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setNewPurpose(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Problems
                </Typography>
                <TextField
                    value={newProblems}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setNewProblems(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Lessons Learned
                </Typography>
                <TextField
                    value={newLessons}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setNewLessons(e.target.value)}
                />
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Skills
                </Typography>
                <Typography>
                    TBD...
                </Typography>
            </Box>
            <Box my={5}>
                <Typography variant="overline">
                    Project Intro
                </Typography>
                <TextField
                    value={newDisplayDescription}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={(e) => setNewDisplayDescription(e.target.value)}
                />
            </Box>
            <Button onClick={() => handleAddProject(newProject)} variant="contained" >Add project</Button>
        </Box>
    )
}

export default NewProjectModal