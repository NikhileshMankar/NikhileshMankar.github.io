import { ShieldAlert, BrainCircuit } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import { AnimatedListDemo } from '../components/notifanim'
import Link from 'next/link';



const Research = () => {
  return (

     <section id='research' className="py-16 md:py-32 flex flex-col items-center justify-center bg-[#07080a] overflow-hidden">
            <div className="mx-auto w-[100vw] md:max-w-5xl space-y-8 px-6 md:space-y-12 ">
                <div className="mx-auto max-w-xl text-center mb-0">
                    <h2 className='font-semibold text-[56px] tracking-[1.2px] mb-[24px] leading-[56px]'>
                        Research
                    </h2>
                    <p className='text-center text-[#6a6b6c] text-xl font-medium tracking-[0.2px] pb-[64px]'>
                        Exploring ideas through research and innovation.
                    </p>  
                </div>
                <div className='flex flex-col '>
                    <div className='image-wrapper '>
                        <Image src="/isolatedCube.webp" alt="Research Image" width={833} height={672} className='showcase-bg' unoptimized/>
                        <div className='outer-frame-window'>
                            <div className='inner-frame-window'>
                                <div className='frame-desktop'>
                                    <Image src="/isolatedCube.webp" alt="Research Image" width={833} height={672} className='inner-showcase-bg' unoptimized />
                                    <div className='content-div'>
                                        <div className='chat-sidebar text-[12px] md:text-[14px]'>
                                            <div className='active-chat chat-item '>
                                                <h3 className='text-white'>Random Forest</h3>
                                                <p className='text-white/50'>94.2% accuracy on test set</p>
                                                </div>
                                                <div className='chat-item'>
                                                <h3 className='text-white'>XGBoost</h3>
                                                <p className='text-white/50'>Best F1-score in evaluation</p>
                                                </div>
                                                <div className='chat-item'>
                                                <h3 className='text-white'>SVM</h3>
                                                <p className='text-white/50'>High precision, low recall</p>
                                                </div>
                                                <div className='chat-item'>
                                                <h3 className='text-white'>Logistic Regression</h3>
                                                <p className='text-white/50'>Performed well on benign URLs</p>
                                                </div>
                                                <div className='chat-item'>
                                                <h3 className='text-white'>Dataset</h3>
                                                <p className='text-white/50'>50k URLs: benign & malicious</p>
                                                </div>
                                                <div className='chat-item'>
                                                <h3 className='text-white'>Live Testing</h3>
                                                <p className='text-white/50'>Model flagged phishing site</p>
                                                </div>
                                                <div className='chat-item'>
                                                <h3 className='text-white'>Metrics Overview</h3>
                                                <p className='text-white/50'>Accuracy, F1, ROC-AUC</p>
                                                </div>

                                        </div>
                                        <div className='chat-window'>
                                                <AnimatedListDemo />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='image-wrapper-placeholder' />
                    <div className='page-description-container md:flex-row flex-col '>
                        <div className='flex flex-col  justify-center items-center'>
                            <div className="p-2 rounded-full bg-gradient-to-b from-[#ff6363] to-[#d72a2a] w-fit">
                            <ShieldAlert className="w-6 h-6 text-white/80" />
                            </div>
                        
                        <span className='page-description-item ease-in-out transition-all duration-300 text-center cursor-pointer'>
                            <Link href="https://ieeexplore.ieee.org/document/10575452" >
                            Comparative Evaluation of Machine Learning Models for Malicious URL Detection.
                            </Link>
                        </span>
                        
                        </div>

                        <div className='flex flex-col  justify-center items-center'>

                                <div className="p-2 rounded-full bg-gradient-to-b from-[#ff6363] to-[#d72a2a] w-fit">
                            <BrainCircuit className="w-6 h-6 text-white/80" />
                            </div>
                        
                        <span className='page-description-item  ease-in-out transition-all duration-300 text-center cursor-pointer'>
                            <Link href="https://ieeexplore.ieee.org/document/10743842" >
                            Cyberbullying Classification Using a Natural Language Processing and Machine Learning Techniques.
                            </Link>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Research



