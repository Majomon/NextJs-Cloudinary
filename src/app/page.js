"use client";
function HomePage() {
  return (
    <div>
      <form>
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
          }}
        />
      </form>
    </div>
  );
}

export default HomePage;
