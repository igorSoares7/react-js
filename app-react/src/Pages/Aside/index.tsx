interface className {
    className?: any
}


const Aside = ({ className }: className) => {
    return (
        <aside className={className}>
            <div className="aside">
                <div className="conteudo-aside">
                    CONTEUDO ASIDE
                </div>
            </div>
        </aside>
    )
}

export default Aside