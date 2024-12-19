const Footer = () => {
  return (
    <footer className="text-gray-400 text-sm bg-black py-8 px-6 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>Help Center</p>
          <p>Investor Relations</p>
          <p>Jobs</p>
        </div>
        <div>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>FAQ</p>
          <p>Legal Notices</p>
          <p>Netflix Originals</p>
        </div>
      </div>
      <p className="mt-6">© 2024 Netflix Clone. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
