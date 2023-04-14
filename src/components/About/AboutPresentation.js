import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'

const AboutPresentation = ({ 
    descriptionButtonType, 
    aboutData: { greetings, [`${descriptionButtonType}Description`]: description }, 
    technologyList, 
    descriptionLengthButtons, 
    profilePicture, 
    signature 
}) => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [setLetterClass])

    return (
        <div className="container">
            <section className="about inside-container">
                <div className="text-column">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={greetings.split('')}
                        idx={15}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
                            <path fill="#42ade2" d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1m-.3 3.6c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9m8.7-.4c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"/><path fill="#ffdd67" d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9m33.1 20.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"/>
                            <path fill="#eba352" d="M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2"/>
                            <path fill="#ffdd67" d="m27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7"/>
                            <path fill="#eba352" d="M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1"/>
                            <path fill="#ffdd67" d="m34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6"/>
                            <path fill="#eba352" d="M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"/>
                            <path fill="#ffdd67" d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5"/>
                            <g fill="#eba352">
                            <path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"/>
                            <path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"/>
                            </g>
                        </svg>
                    </h1>
                    {descriptionLengthButtons}
                    <div id="description">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='signature-container'>
                        <img src={process.env.PUBLIC_URL + signature} alt="Handwriten signature of Jerome."/>
                    </div>
                </div>
                <div className='img-column'>
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + profilePicture} className="your-pic" alt="Jerome looking to his left in black and white." />
                </div>
                <section className='stack-container'>
                    {Object.values(technologyList).map((item) => (
                    <div key={item.id} className='stack-single'>
                        <img src={process.env.PUBLIC_URL + item.url} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                    ))}
                </section>
                </div>
            </section>
        </div>
    );
};

export default AboutPresentation;