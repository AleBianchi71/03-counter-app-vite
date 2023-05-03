import PropTypes from 'prop-types';

export const FirstApp = ({
   title,
    subTitle = 'La tierra explota!' }) => {
   
  return (
    <>
      <h1>{title}</h1>
      {/*<code>{JSON.stringify(newMensaje)}</code>*/}
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'No hay ningun titulo',
  subTitle: 'No hay subtitulo'
}
