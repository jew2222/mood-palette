import { useEffect, useState } from 'react'
import MoodResultPageView from './mood-result-page'
import YouTube from 'react-youtube';

const MoodResultPage =() => {
    // 현재 재생 중인 동영상의 인덱스
    const [currentIndex, setCurrentIndex] = useState(0);
    const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE'];
  useEffect(()=>{
  },[])  //함수, 배열 
  //가상 라이팅 , 언마운트시 원하는 
  return (
  <MoodResultPageView YouTube={YouTube} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} playlistVideoIds={playlistVideoIds}/>
  )
}

export default MoodResultPage
