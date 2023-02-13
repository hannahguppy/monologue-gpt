// import

export const NextRouteAnnouncer = () => {
  return(
    <>
      <next-route-announcer>
        <p
        aria-live="assertive"
        id="__next-route-announcer__"
        role="alert"
        style={{
          border: "0",
          clip: "rect(0, 0, 0, 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap",
          overflowWrap: "normal"
          }}
        ></p>
      </next-route-announcer>
      <div portal-container="">
      <span
        className="pointer-events-none fixed inset-0 z-[60] mx-auto my-2 flex max-w-[560px] flex-col items-stretch justify-start md:pb-5"
      ></span>
      </div>
    </>
  )
}
