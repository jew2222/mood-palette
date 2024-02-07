import { useEffect, useState } from 'react'
import MoodResultPageView from './mood-result-page'
import YouTube from 'react-youtube';

const MoodResultPage =() => {
    // 동영상이 종료되면 호출되는 콜백 함수
    const onEnd = () => {
      // 다음 동영상으로 이동
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistVideoIds.length)
    }
  
    // 옵션 설정
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // 동영상의 재생 시작 위치 설정
        start: 0,
        autoplay: 1, // 자동 재생 활성화
      },
    }

    // 현재 재생 중인 동영상의 인덱스
    const [currentIndex, setCurrentIndex] = useState(0);
    const playlistVideoIds = ['3TNm2tLw88A?si=vrfnDGY8zrhn4ARt', 'JUzPQ0JalHE'];
  useEffect(()=>{
  },[])  
  return (
  <MoodResultPageView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} playlistVideoIds={playlistVideoIds} onEnd={onEnd} opts={opts}/>
  )
}

export default MoodResultPage
