import React, { Component } from 'react'

class FormularioCadastro extends Component {
    render() {
        return (
            <section>
                <form>
                    <input type='text' placeholder='Titulo' />
                    <textarea placeholder='Escreva sua Nota'></textarea>
                    <button> Criar Nota </button>
                </form>
            </section>
        )
    }
}
export default FormularioCadastro;