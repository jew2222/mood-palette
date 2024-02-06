import {Link} from 'react-router-dom'

const shareStatisticsImage = () => {};
const ReportPageView = ({
  statistics,
  setStatistics,
  statisticsRef,
  generateStatistics,
  saveStatisticsImage,
}) => {

  return (
    <div>
      <Link to="/report">로그인</Link>
      <Link to="/report">회원가입</Link>
      <Link to="/report">보고서</Link>
      <Link to="/">감정 결과</Link>

      {/* 통계 생성 버튼 */}
      <button onClick={generateStatistics}>통계 생성</button>

      {/* 통계를 보여줄 DOM 요소 */}
      <div ref={statisticsRef}>
        {statistics && (
          <div>
            <h2>Statistics</h2>
            <p>{statistics}</p>
          </div>
        )}
      </div>

      {/* 이미지 저장 버튼 */}
      {statistics && (
        <button onClick={saveStatisticsImage}>통계 이미지 저장</button>
      )}

      {/* 이미지 공유 버튼 */}
      {statistics && (
        <button onClick={shareStatisticsImage}>통계 이미지 공유</button>
      )}
    </div>
  );
};

export default ReportPageView;
