const MoodResultPageView =({YouTube,currentIndex,setCurrentIndex,playlistVideoIds})=>{ //프롭스 대신 객체로 넣기(타입)
    // 동영상이 종료되면 호출되는 콜백 함수
    const onEnd = () => {
      // 다음 동영상으로 이동
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlistVideoIds.length);
    };

    // 옵션 설정
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // 동영상의 재생 시작 위치 설정
        start: 0,
        autoplay: 1, // 자동 재생 활성화
      },
    };

  return(
    <div>
        <YouTube
          videoId={playlistVideoIds[currentIndex]}
          opts={opts}
          onEnd={onEnd}
        />
        <h1>아이프레임</h1>
      <iframe width="560" height="315" 
      src={`https://www.youtube.com/embed/${playlistVideoIds[currentIndex]}?autoplay=1`} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"         
      allowFullScreen
    ></iframe>

      <h3>플레이리스트</h3>
      <ul>
        {/* 플레이리스트에 속한 동영상 목록 출력 */}
        {playlistVideoIds.map((videoId, index) => (
          <li key={index}>
            <button onClick={() => setCurrentIndex(index)}>
              동영상 {index + 1}
            </button>
          </li>
        ))}
      </ul>

  </div>
)
};

export default MoodResultPageView;