import TableDesktop from "../../components/tableDesktop/Index";
import TableMobile from "../../components/tableMobile/Index";


export default function SectionTable(){
    return (
        <section className="py-10 md:py-14 xl:py-20 px-5 md:px-[5%] lg:px-[95px]">
            <div className="hidden md:block" data-aos="fade-down" data-aos-duration='1500'>
                <TableDesktop />
            </div>

            <div className="md:hidden" data-aos="fade-down" data-aos-duration='1500'>
                <TableMobile />
            </div>
            
        </section>
    )
}