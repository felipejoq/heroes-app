export const Alert = ({type='primary', message = 'default message'}) => {
  return (
    <div className={`alert alert-${type} animate__animated animate__fadeIn`}>
      {message}
    </div>
  );
};