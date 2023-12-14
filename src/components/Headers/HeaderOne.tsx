interface HeaderOneProps {
    image: string;
  }
  
  function HeaderOne(props: HeaderOneProps) {
    const { image } = props;
  
    return (
      <div className="flex justify-between items-center py-8 bg-zinc-800">
            <div className="w-1/4 flex justify-center items-center">
            <nav className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-700 transition duration-300">Link 1</a>
                <a href="#" className="text-white hover:text-gray-700 transition duration-300">Link 2</a>
                <a href="#" className="text-white hover:text-gray-700 transition duration-300">Link 3</a>
                <a href="#" className="text-white hover:text-gray-700 transition duration-300">Link 4</a>
            </nav>
            </div>
            <div className="w-1/4 flex justify-center">
                {image && <img src={image} alt="Header Image" className="h-12" />}
            </div>
            <div className="w-1/4"></div>
        </div>
    );
  }
  
  export default HeaderOne;