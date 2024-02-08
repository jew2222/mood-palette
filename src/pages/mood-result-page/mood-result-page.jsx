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
