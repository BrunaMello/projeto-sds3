import NavBar from "../../components/NavBar";
import BarChart from "../../components/BarChart";
import DonutChart from "../../components/DonutChart";
import DataTable from "../../components/DataTable";
import Footer from "../../components/Footer";

const Dashboard = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <h1 className="text-primary py-3">Dashboard Vendas</h1>

                <div className="row px-3">
                    <div className="col col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                        <BarChart></BarChart>
                    </div>
                    <div className="col col-sm-6">
                        <h5 className="text-center text-secondary">Todas as Vendas</h5>
                        <DonutChart></DonutChart>
                    </div>

                </div>

                <div className="py-1">
                    <h2 className="text-primary">Todas as Vendas</h2>
                </div>
                <DataTable></DataTable>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;
