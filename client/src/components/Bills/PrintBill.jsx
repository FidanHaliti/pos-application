import { Button, Modal } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Print invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto bg-white px-6">
        <article className="overflow-hidden">
          <div className="logo my-6"></div>
          <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
          <div className="bill-details">
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
    <div className="text-md text-slate-500">
      <p className="font-bold text-slate-700">Incoice Details:</p>
      <p>Unvrapped</p>
      <p>Street </p>
      <p>Kosova</p>
      <p>CA 1234</p>
    </div>
    <div className="text-md text-slate-500">
      <p className="font-bold text-slate-700">Invoice:</p>
      <p>Unvrapped</p>
      <p>Street </p>
      <p>Kosova</p>
      <p>CA 1234</p>
    </div>
    <div className="text-md text-slate-500">
      <p className="font-bold text-slate-700">Invoice No:</p>
      <p>0041</p>
      <p className="font-bold text-slate-700 mt-2">Date of Issue</p>
      <p>2023-07-13</p>
    </div>
    <div className="text-md text-slate-500">
      <p className="font-bold text-slate-700">Terms:</p>
      <p>0 Days</p>
      <p className="font-bold text-slate-700 mt-2">Due</p>
      <p>00:00:00</p>
    </div>
  </div>
</div>

<div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>5₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>5.00₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Ara Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">61₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">KDV</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">+4.88₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">Genel Toplam</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Genel Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">65.88₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                  </p>
                </div>
              </div>
            </div>
        </article>
      </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary size-large">Print</Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
