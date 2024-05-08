import './AvailableLang.css'
const AvailableLang = () => {
    return (
        <div className='AvailableLangDiv'>
            <h2 className='AvailableText'>Idiomas que podes aprender...</h2>
            <div className='banderas'>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fen-uk.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Inglés</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fes.png&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Español</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Ffr.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Francés</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fde.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Alemán</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fit.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Italiano</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fpt-br.png&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Portugués</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fja.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Japonés</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fzh.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Chino</p>
                </div>
                <div className="grupoIdioma">
                    <img src='https://www.tandem.net/_next/image?url=%2Fstatic%2Fflags%2Flanguages%2Fko.svg&w=96&q=75' width="40px" alt='bandera' />
                    <p className='textoIdioma'>Coreano</p>
                </div>

            </div>
        </div>
    )
}

export default AvailableLang