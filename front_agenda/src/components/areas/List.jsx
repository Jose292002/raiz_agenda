import React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import UseAreas from '../../hooks/UseAreas'

function List() {
    const { areas, loading } = UseAreas()
    if (loading) return <Spinner />
    return (
        <Table striped bordered hover>
            <thead>
                <th>Code</th>
                <th>Name</th>
                <th>Observations</th>
                <th>Status</th>
            </thead>
            <tbody>
                {areas.map(({ id, code, name, observations, status }) => (
                    <tr key={`area-row-${id}`}>
                        <td>{code}</td>
                        <td>{name}</td>
                        <td>{observations}</td>
                        <td>{status ? 'Active' : 'Inactive'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default List