const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-center">
          &copy; Copyright by <span className="font-bold">Codinger.</span>
        </p>
        <div className="sosial-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
