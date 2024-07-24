const Tour = ({ id, image, date, name, info, country, days, price }) => {
  return (
    <article key={id} className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={name} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <h4>{name}</h4>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {country}
          </p>
          <p>{days} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  )
}
export default Tour