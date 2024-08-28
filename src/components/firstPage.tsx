'use client'

import { useEffect, useState } from "react";
import { Dancing_Script, Pinyon_Script, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import '../styles/card.css'


const ds = Dancing_Script({ subsets: ['latin'] })
const ps = Pinyon_Script({ subsets: ['latin'], weight: '400' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })
const peaches = localFont({ src: '../../public/peaches.ttf' })

export default function FirstPage() {
    const [page, setPage] = useState(0)
    const touchStartX = 0
    const touchStartY = 0
    const touchendX = 0
    const touchendY = 0

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
            // switch(currentLocation) {
            //     case 2:
            //         closeBook(true);
            //         paper1.classList.remove("flipped");
            //         paper1.style.zIndex = 3;
            //         break;
            //     case 3:
            //         paper2.classList.remove("flipped");
            //         paper2.style.zIndex = 2;
            //         break;
            //     case 4:
            //         openBook();
            //         paper3.classList.remove("flipped");
            //         paper3.style.zIndex = 1;
            //         break;
            //     default:
            //         throw new Error("unkown state");
            // }
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

            <main className="flex flex-row">
                {
                    page === 0 && (
                        <article id="page-0">
                            <div className="front page-1 w-screen text-center justify-between flex flex-col p-6">
                                <p style={{ letterSpacing: '5px'}}>TAMI & SYARIF</p>

                                <p className={peaches.className + ' text-7xl'}>We're <br></br> Getting <br></br> Married</p>

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
                            <div className={'front page-2 text-center p-6 w-screen'}>
                                <div className="text-center">
                                    <h1 className={peaches.className + ' text-7xl pb-3'}>We Got Married</h1>
                                    <p className="py-6">Kami sangat berbahagia untuk mengumumkan bahwa kami telah menjadi sepasang suami istri dalam acara pernikahan yang intim dan dikelilingi oleh keluarga dan orang-orang terdekat.</p>
                                    <p>Kami sangat bersyukur atas cinta dan dukungan yang telah diberikan oleh keluarga dan teman-teman.</p>

                                    <div className="py-20">
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
                                    // style={{filter: 'invert(1)'}}
                                />
                                </div>
                                <div className="absolute bottom-0 right-0 tex-black" onClick={goNextPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                    // style={{filter: 'invert(1)'}}
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
                                <p className="text-right mb-5">#hastag</p>

                                <div className="absolute bottom-0 left-0 text-black" onClick={goPrevPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow-2.png"
                                    width='40'
                                    height='40'
                                    // style={{filter: 'invert(1)'}}
                                />
                                </div>
                                <div className="absolute bottom-0 right-0 tex-black" onClick={goNextPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                    // style={{filter: 'invert(1)'}}
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
                                <p className="text-right mb-5">#hastag</p>

                                <div className="absolute bottom-0 left-0 text-black" onClick={goPrevPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow-2.png"
                                    width='40'
                                    height='40'
                                    // style={{filter: 'invert(1)'}}
                                />
                                </div>
                                <div className="absolute bottom-0 right-0 tex-black" onClick={goNextPage}>
                                <img
                                    rel="icon"
                                    src="../icon-arrow.png"
                                    width='40'
                                    height='40'
                                    // style={{filter: 'invert(1)'}}
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
                                <p className="text-right">#hastag</p>

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