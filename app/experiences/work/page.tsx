export default function WorksPage() {
  return (
    <div>
      <ol className="ml-6 space-y-8 list-decimal">
        <li>
          <div className="flex flex-col space-y-5">
            <div className="inline-flex items-center gap-2">
              <h1>Tên công ty:</h1>
              <p>VNPT - Tập đoàn Bưu chính Viễn thông Việt Nam.</p>
            </div>

            <div className="inline-flex items-center gap-2">
              <h1>Vị trí:</h1>
              <p>Thực tập sinh lập trình Website.</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <h1>Thời gian:</h1>
              <p>13/05/2024 - 05/07/2024</p>
            </div>
          </div>
        </li>

        <li>
          <div className="flex flex-col space-y-5">
            <div className="inline-flex items-center gap-2">
              <h1>Tên công ty:</h1>
              <p>VNPT - Tập đoàn Bưu chính Viễn thông Việt Nam.</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <h1>Vị trí:</h1>
              <p>Thực tập sinh lập trình Website.</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <h1>Thời gian:</h1>
              <p>2 tháng.</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
