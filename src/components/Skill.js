import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function Skill({skills}) {

    // const skills = ['JavaScript', 'React', 'MaterialUI', 'Express', 'Node', 'Sequelize', 'Git', 'Auth0', 'Github', 'Postgres', 'Mongo', 'Heroku', 'Vue', 'Jest']
    console.log(skills)
    return (
        <Stack sx={{ display: 'inline'}} direction="row">
            {skills.map(skill => {
                return (
                    <Chip avatar={<Avatar />} sx={{ marginRight: 1, borderRadius: 2, fontWeight: 500, boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;' }} className={skill + '-skill'} label={skill} />
                    )
            })}
        </Stack>
    );
}
