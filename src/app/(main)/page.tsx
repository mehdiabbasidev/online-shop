import { AttributeSection } from "../_components/attribute-section";
import ProductGroups from "../_components/products/product-groups/product-groups";
import ProductList from "../_components/products/product-list/product-list";

export default function Home() {
    return (
        <section className="container-fluid mx-auto flex flex-col items-center space-y-[50px] py-16">
            <h1>Darsman Online Shop</h1>
            {/* ----------------------- Product Groups Section--------------------------- */}
            <section className="containerD">
                <ProductGroups/>
            </section>

            {/* ----------------------- Attribution Section--------------------------- */}
            <section className="containerD">
               <AttributeSection/>
            </section>

            {/* ----------------------- Products Section--------------------------- */}
            <section className="containerD">
                <ProductList/>
            </section>

            {/* ----------------------- Special Offers Banner Section --------------------------- */}
            {/* <section className="containerD">
                <SpecialOffersBanner/>
            </section> */}

            {/* ----------------------- Small Banner Section--------------------------- */}
            {/* <section className="containerD">
                <SmallBanner/>
            </section> */}

            {/* -----------------------  Latest Blogs Section --------------------------- */}
            {/* <section className="containerD">
               <LatestBlogs/>
            </section> */}

            {/* -----------------------  Support Section --------------------------- */}
            {/* <section className="containerD">
                <Support/> 
            </section> */}

            {/* ----------------------- Big Banner Section --------------------------- */}
            {/* <section className="containerD">
                <BigBanner/>
            </section> */}
        </section>
    )
}
