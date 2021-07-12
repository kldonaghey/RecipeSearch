import PropTypes from 'prop-types';

const DisplayVideo = ({ embedinfo }) => (
    <div className='video_display'>
        <iframe
            width="850"
            height="480"
            src= {`${embedinfo}`}
            frameBorder="0"
            allowFullScreen
            title="video"
        />
    </div>
);

export default DisplayVideo;