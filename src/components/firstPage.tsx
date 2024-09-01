'use client'

import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import '../styles/card.css'

const peaches = localFont({ src: '../../public/peaches.ttf' })

export default function FirstPage() {
    const [page, setPage] = useState(0)
    let myAudio = document.querySelector('#audio') as HTMLAudioElement
    if(myAudio) {
        myAudio.play()
        myAudio.volume = 0.7
        myAudio.loop = true
    }

    function goNextPage() {
        if (typeof document !== 'undefined') {
            if(page < 4) {
                setPage(page + 1);
            }
            // const elements = document.getElementsByClassName('page-2')[0] as HTMLElement;
            // console.log(elements)
            // elements.style.transform = "translateX(50%)"
          }     
    }

    function goPrevPage() {
        if(page >= 0) {
            setPage(page - 1);
        }
    }

    let scrollTimeout: number | NodeJS.Timeout | undefined;
    let currentTrack = 2;

    // if (typeof window !== "undefined") {
    //     window.addEventListener("touchend", () => {
    //         window.clearTimeout(scrollTimeout);
    //         scrollTimeout = setTimeout(() => {
    //             const elem = document.querySelector("#page-0") as HTMLElement
    //             console.log('elem',elem)
    //             console.log('elem',elem.offsetWidth)
    //             console.log('elemx',window.pageXOffset)
    //             if(elem) {
    //                 currentTrack = Math.floor(
    //                     window.pageXOffset / elem.offsetWidth + 0.5
    //                 );
    //             }
    //             document.querySelector(`[href="#page-${currentTrack}"]`)!.dispatchEvent(new MouseEvent("click"));
    //         }, 100);
    //       });
    // }

    return (
        <>
            <section>
                <a href="#page-0"></a>
                <a href="#page-1"></a>
                <a href="#page-2"></a>
                <a href="#page-3"></a>
                <a href="#page-4"></a>
            </section>

            <audio id="audio" src="../wedding.mp3"></audio>

            <main className="flex flex-row">
                {
                    page === 0 && (
                        <article id="page-0">
                            <div className="front page-1 w-screen text-center justify-between flex flex-col p-6">
                                <p style={{ letterSpacing: '5px'}}>TAMI & SYARIF</p>

                                <p className={peaches.className + ' text-7xl text-animation'}>We&apos;re <br></br> Getting <br></br> Married</p>

                                <p style={{ letterSpacing: '5px'}}>28 AGUSTUS 2024</p>
                            </div>

                            <div className="absolute bottom-0 right-0" onClick={goNextPage}>    
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                    style={{filter: 'invert(1)'}}
                                />
                            </div>
                        </article>

                    )
                }
                {
                    page === 1 && (
                        <article id="page-1">
                            <div className={'front page-2 text-center p-6 w-screen content-center'}>
                                <div className="text-center flex flex-col justify-between" style={{ height: '-webkit-fill-available'}}>
                                    <h1 className={peaches.className + ' text-7xl pb-3 text-animation'}>We Got Married</h1>
                                    <p className="text-animation">Dengan segala kesederhaan dan dikelilingi keluarga dan sahabat terdekat kami. 
                                    Telah berlangsung pernikahan kami <br /> pada <b>28 Agustus 2024</b> di <b>Haurngombong, Pamulihan, Sumedang</b>. <br />
                                    Terimakasih atas segenap doa dan dukungannya untuk kami
                                    </p>
                                    <p style={{
                                        fontFamily: 'monospace', fontStyle: 'italic'
                                    }} className="text-animation">"A great marriage isn't something that just happens; it's something that must be created." - Fawn Weaver</p>
                                    <div className="pt-16 text-animation">
                                        <p className="">Yang berbahagia</p>
                                        <p className="" style={{ letterSpacing: '4px'}}>TAMI & SYARIF</p>
                                    </div>
                                </div>
                          
                                <div className="absolute bottom-0 left-0 text-black" onClick={goPrevPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow-2.png"
                                    width='40'
                                    height='40'
                                />
                                </div>
                                <div className="absolute bottom-0 right-0 tex-black" onClick={goNextPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                />
                                </div>
                            </div>

                        </article>
                    )
                }
                {
                    page === 2 && (
                        <article id="page-2">
                            <div className="front page-3 p-6 w-screen justify-between flex flex-col">
                                <p className="text-left">OUR GALLERY</p>
                                <div className="img-collect">
                                    <img src="../foto2.jpg" className="img-style" />
                                    <img src="../foto1.jpg" className="img-style" />
                                    <img src="../foto9.jpg" className="img-style" />
                                </div>
                                <p className="text-right mb-5">#berTAMaSYA</p>

                                <div className="absolute bottom-0 left-0 text-black" onClick={goPrevPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow-2.png"
                                    width='40'
                                    height='40'
                                />
                                </div>
                                <div className="absolute bottom-0 right-0 tex-black" onClick={goNextPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                />
                                </div>
                            </div>
                        </article>
                    )
                }
                {
                    page === 3 && (
                        <article id="page-3">
                            <div className="front page-3 p-6 w-screen justify-between flex flex-col">
                                <p className="text-left">OUR GALLERY</p>
                                <div className="img-collect">
                                    <img src="../foto4.jpg" className="img-style" />
                                    <img src="../foto7.jpg" className="img-style" />
                                    <img src="../foto5.jpg" className="img-style" />
                                </div>
                                <p className="text-right mb-5">#berTAMaSYA</p>

                                <div className="absolute bottom-0 left-0 text-black" onClick={goPrevPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow-2.png"
                                    width='40'
                                    height='40'
                                />
                                </div>
                                <div className="absolute bottom-0 right-0 tex-black" onClick={goNextPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                />
                                </div>
                            </div>
                        </article>
                    )
                }
                {
                    page === 4 && (
                        <article id="page-4">
                            <div className="front page-3 p-6 w-screen justify-between flex flex-col">
                                <p className="text-left">OUR GALLERY</p>
                                <div className="img-collect">
                                    <img src="../foto10.jpg" className="img-style" />
                                    <img src="../foto12.jpg" className="img-style" style={{ objectPosition: 'bottom'}} />
                                    <img src="../foto11.jpg" className="img-style" />
                                </div>
                                <p className="text-right mb-5">#berTAMaSYA</p>

                                <div className="absolute bottom-0 left-0 text-black" onClick={goPrevPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow-2.png"
                                    width='40'
                                    height='40'
                                    // style={{filter: 'invert(1)'}}
                                />
                                </div>
                            </div>
                        </article>
                    )
                }
            </main>
        </>
    ) 
}