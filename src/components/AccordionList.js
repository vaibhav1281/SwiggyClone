import { IMAGE_CDN } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { useState, useEffect } from "react";

const AccordionList = ({items}) => {
    // console.log(items)

    const dispatch = useDispatch();

    const handleAddedItems = (items) =>{
        // Dispatch An Action
        dispatch(addItem(items))
    }

    const[readMore, setReadMore] = useState(false);
    const haldleDiscription = () => {
        setReadMore(!readMore);
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

   
    return windowWidth <= 768 ? (
        <div className="">
            {
                items.map((item) => (
                    <div className="border-b-2 space-y-2 flex w-full  justify-between py-4 mx-2 ">
                        <div className="space-y-2 w-[60%]">
                            <h1 className="font-bold text-base text-[#02060CBF]">{item.card.info.name}</h1>
                            <p className="font-bold text-[#02060CEB] text-[16px]">₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100}</p>
                            <div className="flex items-center space-x-1">
                                {/* Start */}
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#3d9b6d" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3d9b6d" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </span>
                                {/* ratings */}
                                <span className="text-[13px] font-bold text-[#116649] leading-4">
                                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                                </span>
                                {/* ratind counts */}
                                <span className="text-[#02060C99]">
                                    ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                                </span>
                            </div>
                            <p className=" text-[#02060C99] text-sm font-semibold">
                                {readMore ? item.card.info.description : `${item.card.info.description.slice(0,85)}...`}
                                <span className="text-lg font-semibold text-black" onClick={haldleDiscription}>{readMore ? 'Less': 'More'}</span>
                            </p>
                        </div>
                        <div className="w-[40%] h-[134px] flex flex-col items-center relative">
                            <img className="w-[150px] h-[144px] rounded-lg absolute" src={IMAGE_CDN + item.card.info.imageId}/>
                            <button className="w-24 h-9 border-2 rounded-lg text-green-500 font-bold box-border bg-white absolute -bottom-5" onClick={() => handleAddedItems(item)}>Add+</button>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    ) :(
            <div className="">
                {
                    items.map((item) =>(
                        <div className="border-b-2 flex w-full py-7" key={item.card.info.id}>
                            <div className="w-10/12">
                                <p className="font-bold">{item.card.info.name}</p>
                                <p>₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100}</p>
                                <p>{item.card.info.description}</p>
                            </div>
                            <div className="w-2/12 relative">
                                <img src={IMAGE_CDN + item.card.info.imageId} className="w-[120px] h-[98px] rounded-xl"/>
                                <button className="absolute w-24 h-9 border-2 rounded-lg text-green-500 font-bold -bottom-3 left-3 bg-white"
                                 onClick={() => handleAddedItems(item)}>
                                    ADD+
                                </button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
    )
};

// higher order component
// export const withBestseller = (AccordionList) => {
//     return () => {
//         return(
//             <div>
//                 <label>Bestseller</label>
//                 <AccordionList {...props}/>
//             </div>
//         )
//     }
// }

export default AccordionList