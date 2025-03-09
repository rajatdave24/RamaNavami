import {Button, Center, Container, createStyles, Group, Overlay, rem, Stack, Text, Title} from '@mantine/core';
import {IconRocket} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import iskconbannerbg from "../../assets/img/Group37.png";
import iskcondonate from "../../assets/logos/Slice1.png"
const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(180),
        paddingBottom: rem(130),
        backgroundImage:`url(${iskconbannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '29rem',

        [theme.fn.smallerThan('md')]: {
            height: rem(560),
        },

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(80),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
        height: rem(640),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.fn.smallerThan('md')]: {
            height: rem(560),
        }
    },

    title: {
        fontWeight: 900,
        fontSize: rem(64),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        textAlign: 'center',

        [theme.fn.smallerThan('md')]: {
            fontSize: rem(48),
        },

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
            textAlign: 'left',
            fontWeight: 700,
            padding: 0
        },
    },

    highlight: {
        color: theme.colors.gray[4],
    },

    description: {
        color: theme.white,
        fontSize: rem(24),
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },

    controls: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    control: {
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'rgba(255, 255, 255, .4)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .45) !important',
        },
    },

    badge: {
        width: "fit-content",
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        backgroundImage: theme.fn.gradient({from: theme.colors.green[2], to: theme.colors.lime[6], deg: 20}),
        fontWeight: 500
    }
}));

const HeroSection = () => {
    const {classes, theme} = useStyles();

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1}/>

            <div className={classes.inner}>
                <Container>
                    <Stack spacing="xl">
                        <Center>
                        <button 
        style={{
            paddingLeft: '10px',
            paddingRight: '15px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontFamily: 'Poppins',
            fontSize: '20px',
            borderRadius: '10px',
            backgroundColor: '#FAA817', // Set button background color
            border: 'none', // Remove border
            textTransform: 'uppercase', // Make text uppercase
            display: 'flex',
            fontWeight:'bold',
            color:'#fff',
            alignItems: 'center',
            gap: '10px', // Add spacing between image and text
            cursor: 'pointer' // Add pointer cursor for better UX
        }}
    >
        <img src={iskcondonate} alt="Donate Icon" style={{ height: '30px', width: '30px' }} /> 
        MAKE IT HAPPEN
    </button>
                        </Center>
                        <Title className={classes.title}>
                            Help the people, make 
                        <span style={{
           color:'#FAA817'
        }}>  big changes </span> and <span style={{
            color:'#FAA817'
         }}>help this world.</span>
                        </Title>
                        
                    </Stack>
                </Container>

        </div>
        </div>
    );
}

export default HeroSection;
