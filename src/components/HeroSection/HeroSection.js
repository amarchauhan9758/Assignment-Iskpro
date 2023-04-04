import React, { useEffect } from 'react'
import ListItem from '../Lists/ListItem'
import Slider from '../Slider-component/Slider'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function HeroSection({ activeItem }) {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, [])

    return (
        <>
            <div className="content-tabs">
                <div
                    className={activeItem === 1 ? "content  active-content" : "content"}
                >
                    <h2 data-aos="fade-up" >Activity Information 1</h2>

                    <p data-aos="fade-right">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div data-aos="zoom-in-up" className='container-list'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                    <div>
                        <Slider />
                    </div>

                </div>

                <div
                    className={activeItem === 2 ? "content  active-content" : "content"}
                >
                    <h2>Activity Information 2</h2>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div data-aos="zoom-in" className='container-list'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                    <div>
                        <Slider />
                    </div>
                </div>

                <div
                    className={activeItem === 3 ? "content  active-content" : "content"}
                >
                    <h2 data-aos="zoom-in-down"  >Activity Information 3</h2>

                    <p data-aos="fade-up"  >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div data-aos="zoom-in-up" className='container-list'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                    <div>
                        <Slider />
                    </div>
                </div>
                <div
                    className={activeItem === 4 ? "content  active-content" : "content"}
                >
                    <h2>Activity Information 4</h2>

                    <p data-aos="zoom-out-right" >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='container-list'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                    <div>
                        <Slider />
                    </div>
                </div>
                <div
                    className={activeItem === 5 ? "content  active-content" : "content"}
                >
                    <h2>Activity Information 5</h2>

                    <p data-aos="zoom-out-down" >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div data-aos="zoom-out-up" className='container-list'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                    <div data-aos="zoom-out" >
                        <Slider />
                    </div>
                </div>
                <div
                    className={activeItem === 6 ? "content  active-content" : "content"}
                >
                    <h2 data-aos="zoom-in-right" >Activity Information 6</h2>

                    <p data-aos="zoom-in-left" >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='container-list'>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>
                    <div>
                        <Slider />
                    </div>
                </div>

            </div>

        </>
    )
}

export default HeroSection;