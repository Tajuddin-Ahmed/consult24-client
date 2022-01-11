const Loader = ({ loading }:{loading?:boolean}) => {
    return (
      <>
        {loading && (
          <div className='preloader'>
            <div className='preloader'>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Loader;
  