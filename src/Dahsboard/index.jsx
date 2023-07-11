// todo la carga logica
import DashboardView from './DashboardView'
import useSWR from '../hooks/useSWR'
import { API_URL } from '../config/CONST'

function DashboardHOC () {
  const { data: productData, loading, error } = useSWR({ url: `${API_URL}/products` })

  return (
    <>
      {
          loading
            ? <span>Cargando....</span>
            : <DashboardView data={productData} />
      }
      {
          !loading && error && (
              <h1>Error fatal, consulta más tarde</h1>
          )
      }
    </>
  )
}

export default DashboardHOC
