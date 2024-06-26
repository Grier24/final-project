import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const GenreSidebar = () => {
    const genres = [
        { name: 'Action', value: 'action' }, { name: 'Adventure', value: 'adventure' },
        { name: 'Cars', value: 'cars' }, { name: 'Comedy', value: 'comedy' },
        { name: 'Crime', value: 'crime' }, { name: 'Dementia', value: 'dementia' },
        { name: 'Demons', value: 'demons' }, { name: 'Drama', value: 'drama' },
        { name: 'Dub', value: 'dub' }, { name: 'Ecchi', value: 'ecchi' },
        { name: 'Family', value: 'family' }, { name: 'Fantasy', value: 'fantasy' },
        { name: 'Game', value: 'game' }, { name: 'Gourmet', value: 'gourmet' },
        { name: 'Historical', value: 'historical' }, { name: 'Horror', value: 'horror' },
        { name: 'Josei', value: 'josei' }, { name: 'Kids', value: 'kids' },
        { name: 'Magic', value: 'magic' }, { name: 'Martial Arts', value: 'martial-arts' },
        { name: 'Mecha', value: 'mecha' }, { name: 'Military', value: 'military' },
        { name: 'Music', value: 'music' }, { name: 'Mystery', value: 'mystery' },
        { name: 'Parody', value: 'parody' }, { name: 'Police', value: 'police' },
    ];

    return (
        <Box className='anime-bar' sx={{
            color: '#fff',
            maxHeight: '1200px',
            backgroundColor: '#686868',
            boxShadow: '1px 1px',
            padding: '10px',
            textAlign: 'center',
            border: '2px solid black'
        }}>
            <Typography style={{ fontWeight: 'bold' }}>
                Anime Genres
            </Typography>
            <Box component='ul' sx={{
                color: '#fff',
                listStyleType: 'none',
                margin: 0,
                padding: 0
            }}>
                {genres.map(({ name, value }, i) => (
                    <Link
                        to={`/genre/${value}`}
                        key={i}
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'block',
                            marginBottom: '5px',
                            transition: 'color 0.3s ease',
                        }}
                        value={value}
                    >
                        <li style={{
                            backgroundImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundSize: '200% 200%',
                            transition: 'background-position 0.3s ease'
                        }} className="rainbow-hover">{name}</li>
                    </Link>
                ))}
            </Box>
            <style jsx="true">{`
                .rainbow-hover:hover {
                    color: transparent;
                    background-position: 100%;
                }

                @keyframes rainbow-animation {
                    0% {
                        background-position: 0%;
                    }
                    100% {
                        background-position: 100%;
                    }
                }
            `}</style>
        </Box>
    );
}

export default GenreSidebar;
