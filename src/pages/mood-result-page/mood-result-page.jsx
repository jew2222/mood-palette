import YouTube from 'react-youtube'
import { NavBar } from '../../components'

const MoodResultPageView = ({
  currentIndex,
  setCurrentIndex,
  playlistVideoIds,
  onEnd,
  opts,
}) => {
  return (
    <div>
      <NavBar />
      <YouTube
        videoId={playlistVideoIds[currentIndex]}
        opts={opts}
        onEnd={onEnd}
      />
      <h1>아이프레임</h1>
      <iframe
        width="560"
        height="315"
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
}

export default MoodResultPageView
