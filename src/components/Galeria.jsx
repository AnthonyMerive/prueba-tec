import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Imagen from './Imagen'

const StyledContainer = styled.div`

    .imagenGrid{
        display: grid;
        grid-template-columns: repeat(auto-fill, 230px);
        gap: 40px;
        padding: 40px;
        justify-content: center;
    }
`

const StyledPagination = styled.div`
    display: flex;
    justify-content: center;

`

export default function Galeria() {

    const [galeria, setGaleria] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(result => result.json())
            .then(data => setGaleria(data))

    }, []);

    const filtrado = galeria.filter(data => data.albumId === page)

    const handlePrevPage = (e) => {
        e.stopPropagation()

        setPage(page - 1)

    }

    const handleNextPage = async (e) => {
        e.stopPropagation()

        setPage(page + 1)


    }

    return (<StyledContainer>

        <StyledPagination className="mt-5">
            {page >= 2 ?
                <button className="btn btn-outline-secondary m-3" onClick={handlePrevPage}>◀ previous</button>
                :
                ''
            }

            <h3 className="text-dark m-3">{page}</h3>

            <button className="btn btn-outline-secondary m-3" onClick={handleNextPage}>next ▶</button>
        </StyledPagination>

        <ul className="imagenGrid">

            {
                filtrado.map(imagenes =>
                    <Imagen key={imagenes.id} imagen={imagenes.url} titulo={imagenes.title} />
                )
            }
        </ul>

    </StyledContainer>)
}
