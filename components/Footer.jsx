function Footer() {
    return (
        <footer className='footer'>
            <div className='wrapper'>
            <a
                href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                target='_blank'
                rel='noopener noreferrer'
            >
                From Sean Choi, a grokker
            </a>
            </div>

            <style jsx>{`
                .footer {
                    width: 100vw;
                    background: hsl(0, 2%, 15%);

                    color: #eee;

                    padding: 0.5rem 4rem;

                    position: fixed;
                    bottom: 0;
                }
                .wrapper {
                    display: grid;
                    place-items: center;
                    min-height: 100px;
                }

            `}</style>
        </footer>
    );
}

export default Footer;
