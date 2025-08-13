const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.linkedin.com"
             target="_blank"
             rel="nonreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png"/>
            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.twitter.com"
             target="_blank"
             rel="nonreferrer"
            >
                <img alt="twitter-link" src="../assets/twitter.png"/>
            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.facebook.com"
             target="_blank"
             rel="nonreferrer"
            >
                <img alt="facebook-link" src="../assets/facebook"/>
            </a>

            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.instagram.com"
             target="_blank"
             rel="nonreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram.png"/>
            </a>

            {/* <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.youtube.com"
             target="_blank"
             rel="nonreferrer"
            >
                <img alt="youtube-link" src="../assets/youtube.png"/>
            </a> */}
        </div>
    )
}

export default SocialMediaIcons;