import PaginationComponent from "../userboard/PaginationComponent";
import ProductCard from "../userboard/ProductCard";
import ProductCatalog from "../userboard/ProductCatalog";


const UserBoardPage = () => {
    return (
        <div>
            <ProductCatalog />
            <ProductCatalog />
            <PaginationComponent/>
        </div>

    )
}

export default UserBoardPage;