
export default function RecipeDetail({ name, image, healthScore, summary, diets, steps }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt='recipe'/>
            <h3>{healthScore}</h3>
            <p>{summary}</p>
            <div>
                {
                    diets.map(diet => (<p key={diet}>▸ {diet}</p>))
                }
            </div>
            <div>
                paso a paso
                {
                    steps.map((step) => (
                        <div key={step.number}>
                            <h4>{step.number}</h4>
                            <p>{step.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};