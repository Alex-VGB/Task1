import React, {useEffect, useState} from 'react'

import s from './Home.module.css'
import leftImage1 from '../../../assets/img/illustration-features-tab-1.svg'
import leftImage2 from '../../../assets/img/illustration-features-tab-2.svg'
import leftImage3 from '../../../assets/img/illustration-features-tab-3.svg'
import Slider from './Slider'
import Tabs, {Panel} from './Tabs'
import TabBg from '../../UI/TabBg'
import Button from '../../UI/Button'
import Extension from './Extension/Extension'
import Accordion from './Accordion/Accordion'
import Footer from '../../Footer'
import NavFooter from '../../Footer/NavFooter'
import Modal from "../../UI/Modal/Modal";

function Home() {

    const [active, setActive] = useState('What is Bookmark?')
    const [modalActive, setModalActive] = useState(false)


    useEffect(() => {
        const timeout = setTimeout(() => {
            setModalActive(true)
        }, 30000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className={s.container}>
            <Slider/>
            <Tabs selected={0}>
                <Panel title='Simple Bookmarking'>
                    <div className={s.tabsContainer}>
                        <TabBg
                            linkImgTab={leftImage1}
                            cls='tabsFeatures'/>
                        <div className={s.textContainer}>
                            <h2>Bookmark in one click</h2>
                            <p>Organize your bookmarks however ypu like. Our
                                simple drag-and-drop interface gives you complete
                                control over how you manage your favourite sites</p>
                            <Button title='More info' link='#' cls='btnBlue'/>
                        </div>
                    </div>
                </Panel>
                <Panel title='Speedy Searching'>
                    <div className={s.tabsContainer}>
                        <TabBg
                            linkImgTab={leftImage2}
                            cls='tabsFeatures'/>
                        <div className={s.textContainer}>
                            <h2>Bookmark in one click</h2>
                            <p>Organize your bookmarks however ypu like. Our
                                simple drag-and-drop interface gives you complete
                                control over how you manage your favourite sites</p>
                            <Button title='More info' link='#' cls='btnBlue'/>
                        </div>
                    </div>
                </Panel>
                <Panel title='Easy Sharing'>
                    <div className={s.tabsContainer}>
                        <TabBg
                            linkImgTab={leftImage3}
                            cls='tabsFeatures'/>
                        <div className={s.textContainer}>
                            <h2>Bookmark in one click</h2>
                            <p>Organize your bookmarks however ypu like. Our
                                simple drag-and-drop interface gives you complete
                                control over how you manage your favourite sites</p>
                            <Button title='More info' link='#' cls='btnBlue'/>
                        </div>
                    </div>
                </Panel>
            </Tabs>
            <div>
                <Extension/>
            </div>
            <div className={s.accordionContainer}>
                <div className={s.text}>
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some of our FAQs. If you have any questions<br/>
                        you'd like answered please feel free to email us.</p>
                </div>
                <Accordion title='What is Bookmark?' active={active} setActive={setActive}/>
                <Accordion title='How can I request a new browser?' active={active} setActive={setActive}/>
                <Accordion title='Is there a mobile app?' active={active} setActive={setActive}/>
                <Accordion title='What about other Chromium browsers?' active={active} setActive={setActive}/>
                <div className={s.btnCenter}>
                    <Button title='More info' link='#' cls='btnBlue'/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            <NavFooter/>

            <Modal
                active={modalActive}
                setActive={setModalActive}>
                <Panel title='Easy Sharing'>
                    <div className={s.tabsContainer}>
                        <TabBg
                            linkImgTab={leftImage3}
                            cls='tabsFeatures'/>
                        <div className={s.textContainer}>
                            <h2>Bookmark in one click</h2>
                            <p>Organize your bookmarks however ypu like. Our
                                simple drag-and-drop interface gives you complete
                                control over how you manage your favourite sites</p>
                            <Button title='More info' link='#' cls='btnBlue'/>
                        </div>
                    </div>
                </Panel>
            </Modal>
        </div>
    )
}

export default Home
