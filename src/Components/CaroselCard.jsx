export default function CarouselCard() {
  return (
    <div className="d-flex mx-auto col-8 mt-5 my-5">
      <div className="box me-5 ">
        <span></span>
        <div className="content testImage">
          <img src="boy.jpeg" alt="boy" className="border rounded" />
        </div>
      </div>

      <div className="mt-4 w-75 ms-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nulla
          ut. Itaque quod sint eius corrupti quaerat omnis ducimus aut modi, ea
          natus, perspiciatis, excepturi perferendis ad consectetur eligendi
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam perferendis praesentium labore sed perspiciatis eos,
          architecto suscipit maiores velit voluptas!
        </p>
        <div className="mt-5">
          <h1>krishna Sharma</h1>
          <p>Role : Software Developer</p>
        </div>
      </div>
    </div>
  );
}
