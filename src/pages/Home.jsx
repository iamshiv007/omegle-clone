import React, { useState } from 'react';
import TermsModal from '../components/Home/TermsModal';
import HomeDesktop from '../components/Home/HomeDesktop';
import HomeMobile from '../components/Home/HomeMobile';

const Home = () => {
    const [isTermsModal, setIsTermsModal] = useState(false);

    return (
        <>
            <HomeDesktop setIsTermsModal={setIsTermsModal} />
            {/* mobile */}
            <HomeMobile setIsTermsModal={setIsTermsModal} />

            {isTermsModal && <TermsModal setIsTermsModal={setIsTermsModal} />}

        </>
    )
}

export default Home

