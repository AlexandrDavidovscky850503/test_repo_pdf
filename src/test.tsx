import * as React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
    family: "Roboto",
    fonts: [{ src: "http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf" }, { src:  "http://db.onlinewebfonts.com/t/002209bee8df7c3666a712ebd9253f60.ttf", fontWeight: 700 }],
  });
  
  Font.register({
    family: "RobotoItalic",
    fonts: [{ src: "http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf", fontWeight: 700 }],
  });
  
  Font.register({
    family: "RobotBoldItalic",
    fonts: [{ src:  "https://candyfonts.com/wp-data/2018/10/09/997/Roboto-BoldItalic.ttf", fontWeight: 700 }],
  });


const styles = StyleSheet.create({
  body: {
    padding: "16px 24px 24px",
    fontFamily: "Roboto",
  },
  documentName: {
    fontWeight: 500,
    fontSize: 11,
  },
  documentType: {
    fontWeight: 500,
    fontSize: 20,
  },
  headTable: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #000000",
    borderLeft: "1px solid #000000",
    width: 396,
  },
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #000000",
    borderLeft: "1px solid #000000",
    width: "100%",
  },
  tableWrapperRight: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #000000",
    borderLeft: "1px solid #000000",
    width: "auto",
    marginRight: 16,
  },
  tableWrapperLeft: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #000000",
    borderLeft: "1px solid #000000",
    width: "auto",
    marginLeft: 16,
  },
  tableWrapperNumber: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #000000",
    borderLeft: "1px solid #000000",
    width: 111,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tableRowFlexStart: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  tableRowCell: {
    display: "flex",
    flexDirection: "row",
    width: 174,
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: "100%",
  },
  tableCellExS: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 20,
    width: 66,
  },
  smallCell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    width: "100%",
    height: 20,
  },
  tableCellS: {
    width: 80,
  },
  tableCellM: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: `40%`,
  },
  tableCellL: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: `60%`,
  },
  tableCellFull: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: `100%`,
  },
  tableCellHalf: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: `50%`,
  },
  tableCellAuto: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: "100%",
    flex: "1 0 auto",
  },
  tableCellHeadAuto: {
    width: 100,
    fontWeight: 500,
    fontSize: 8,
    textTransform: "uppercase",
  },
  cellHeadWithBorder: {
    fontWeight: 500,
    fontSize: 8,
    textTransform: "uppercase",
    borderTop: `1px solid #000000`,
    paddingTop: 2,
    marginTop: 4,
  },
  cellHead: {
    fontWeight: 500,
    fontSize: 8,
    textTransform: "uppercase",
  },
  cellHeadCenter: {
    fontWeight: 500,
    fontSize: 8,
    textTransform: "uppercase",
    textAlign: "center",
  },
  cellValue: {
    fontWeight: 700,
    fontSize: 12,
    alignSelf: "center",
    textTransform: "uppercase",
  },
  noteText: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "RobotoItalic",
    fontSize: 10,
    paddingTop: 4,
    textTransform: "uppercase",
  },
  inlineText: {
    display: "flex",
  },
  fontBold: {
    fontFamily: "RobotBoldItalic",
    fontSize: 10,
    display: "flex",
    fontWeight: 700,
  },
  rightColumn: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 135,
    marginLeft: 16,
  },
  withBorder: {
    fontWeight: 500,
    fontSize: 8,
    textTransform: "uppercase",
    borderTop: `1px solid #000000`,
    paddingTop: 2,
    marginTop: 4,
  },
  signatureBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "4px 0",
    width: 180,
  },
  signatureBlockLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "4px 0",
    width: 180,
    marginLeft: 16,
  },
  signatureBlockFlexEnd: {
    display: "flex",
    flexDirection: "column",
    padding: "4px 0",
    width: 180,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  marginLeft: {
    marginLeft: 16,
  },
  marginRight: {
    marginRight: 16,
  },
  totalWrapper: {
    marginTop: 16,
    marginBottom: `-60px`,
  },
  marginTop: {
    marginTop: 16,
  },
  marginBottom: {
    marginBottom: 16,
  },
  footer: {
    display: "flex",
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
    height: "auto",
  },
  footerTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4px 8px",
    fontWeight: 500,
    fontSize: 8,
    width: "100%",
    border: "1px solid #000000",
  },
  footerDocName: {
    fontSize: 10,
    fontWeight: 500,
    padding: "4px 8px 0",
  },
  tableTotal: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #000000",
    borderLeft: "1px solid #000000",
    width: 256,
    backgroundColor: '#0C14140A',
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  },
  flexEnd: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  flexStartRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenterCell: {
    display: "flex",
    flexDirection: "column",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: 32,
    width: `100%`,
    justifyContent: "center",
    alignItems: "center",
  },
  fieldData: {
    borderBottom: "1px solid #000000",
    width: "100%",
  },
  header: {
    display: "flex",
    height: 250,
    marginBottom: 8,
  },
  documentBody: {},
  dataRow: {
    height: 16,
  },
  dataCellS: {
    width: 30,
    fontSize: 8,
    height: "100%",
  },
  dataCellSCenter: {
    display: "flex",
    flexDirection: "column",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    width: 30,
    maxWidth: 30,
    fontSize: 8,
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dataCell: {
    width: 58,
    fontSize: 8,
    height: "100%",
    flex: `1 1 auto`,
  },
  dataCellCenter: {
    display: "flex",
    flexDirection: "column",
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    width: 58,
    fontSize: 8,
    height: "100%",
    textAlign: "center",
  },
  dataHead: {
    fontSize: 8,
    textTransform: "uppercase",
  },
  weightWrapper: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 6,
    fontSize: 8,
  },
  weightWrapperHead: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 6,
    fontSize: 8,
    textTransform: "uppercase",
  },
  checkBox: {
    display: "flex",
    height: 8,
    width: 8,
    marginRight: 2,
    position: "relative",
  },
  square: {
    display: "flex",
    height: 8,
    width: 8,
    border: "1px solid #000000",
    position: "relative",
    marginRight: 2,
  },
  firstLine: {
    fontSize: 6,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 3,
  },
  secondLine: {
    position: "absolute",
    display: "flex",
    top: 2,
    bottom: 0,
    left: `-1px`,
    right: 0,
    fontSize: 8,
    transform: `rotate(-45deg)`,
    width: 9,
    height: 1,
    background: "#000000",
  },
  marginLeftSmall: {
    marginLeft: 6,
    fontSize: 8,
  },
  numberCell: {
    padding: "3px 4px",
    borderBottom: "1px solid #000000",
    borderRight: "1px solid #000000",
    width: 58,
    fontSize: 8,
    height: "100%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "center",
    textTransform: "uppercase",
  },
  tableRowTotal: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  pageNumber: {
    fontSize: 11,
  },
  documentContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: `100%`,
  },
});

const ShippingMemorandumReport = ({ data }) => {
  const {
    pmusa_document,
    document_name,
    reference_number,
    date,
    crop_year,
    tobacco_type,
    container_type,
    note,
    shipper,
    location,
    carrier,
    car_number,
    customer_account,
    destination,
    seals_number,
  } = data.header;
  const { shipment_number, shipping_signature, pk_fo, rev, document_owner } =
    data.footer;

  const batchNumber = (batch) => {
    return batch.batch_number ? batch.batch_number : "";
  };

  return (
    <Document>
      <Page style={styles.body} orientation="portrait" wrap>
        <View>
          {data.batches.map((batch) => (
            <View wrap={false} style={styles.documentContent}>
              <View>
                <View style={styles.header} fixed>
                  <View style={styles.tableRow}>
                    <View>
                      <Text style={styles.documentName}>{pmusa_document}</Text>
                    </View>
                    <View>
                      <Text
                        style={styles.pageNumber}
                        render={({ pageNumber, totalPages }) =>
                          totalPages > 1 &&
                          `Page ${pageNumber} of ${totalPages}`
                        }
                      />
                    </View>
                  </View>
                  <View>
                    <View>
                      <Text style={styles.documentType}>{document_name}</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.tableRow}>
                      <View style={styles.headTable}>
                        <View style={styles.tableRow}>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>mark</Text>
                            <Text style={styles.cellValue}>
                              {batchNumber(batch)}
                            </Text>
                          </View>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>belt</Text>
                            <Text style={styles.cellValue}>{""}</Text>
                          </View>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>crop</Text>
                            <Text style={styles.cellValue}>{crop_year}</Text>
                          </View>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>packing point</Text>
                            <Text style={styles.cellValue}>{tobacco_type}</Text>
                          </View>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>container type</Text>
                            <Text style={styles.cellValue}>
                              {container_type}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.tableRow}>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>
                              additional notes:
                            </Text>
                            <Text style={styles.cellValue}>{""}</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.rightColumn}>
                        <View style={styles.textCenter}>
                          <Text style={styles.cellValue}>
                            {reference_number}
                          </Text>
                          <Text style={styles.withBorder}>
                            reference no./freight code
                          </Text>
                        </View>
                        <View style={styles.tableWrapper}>
                          <View style={styles.tableRow}>
                            <View style={styles.tableCellFull}>
                              <Text style={styles.cellHead}>date</Text>
                              <Text style={styles.cellValue}>{date}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={styles.noteText}>
                        <Text style={styles.fontBold}>note:</Text>
                        <Text style={styles.inlineText}>{note}</Text>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={styles.headTable}>
                        <View style={styles.tableRow}>
                          <View style={styles.tableCellM}>
                            <Text style={styles.cellHead}>shipper</Text>
                            <Text style={styles.cellValue}>{shipper}</Text>
                          </View>
                          <View style={styles.tableCellL}>
                            <Text style={styles.cellHead}>location</Text>
                            <Text style={styles.cellValue}>{location}</Text>
                          </View>
                        </View>
                        <View style={styles.tableRow}>
                          <View style={styles.tableCellHalf}>
                            <Text style={styles.cellHead}>carrier</Text>
                            <Text style={styles.cellValue}>{carrier}</Text>
                          </View>
                          <View style={styles.tableCellHalf}>
                            <Text style={styles.cellHead}>car int. & NO.</Text>
                            <Text style={styles.cellValue}>{car_number}</Text>
                          </View>
                        </View>
                        <View style={styles.tableRow}>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>for a/c of</Text>
                            <Text style={styles.cellValue}>
                              {customer_account}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.tableRow}>
                          <View style={styles.tableCellFull}>
                            <Text style={styles.cellHead}>Destination</Text>
                            <Text style={styles.cellValue}>{destination}</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.rightColumn}>
                        <View style={styles.tableWrapper}>
                          <View style={styles.tableRow}>
                            <View style={styles.tableCellHalf}>
                              <Text style={styles.cellHead}>whse from:</Text>
                              <Text style={styles.cellValue}>{""}</Text>
                            </View>
                            <View style={styles.tableCellHalf}>
                              <Text style={styles.cellHead}>whse to:</Text>
                              <Text style={styles.cellValue}>{""}</Text>
                            </View>
                          </View>
                          <View style={styles.tableRow}>
                            <View style={styles.tableCellFull}>
                              <Text style={styles.cellHead}>seal no. </Text>
                              <Text style={styles.cellValue}>
                                {seals_number}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.tableRow}>
                            <View style={styles.tableCellFull}>
                              <Text style={styles.cellHead}>batch no. </Text>
                              <Text style={styles.cellValue}>
                                {batchNumber(batch)}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.tableRow}>
                            <View style={styles.tableCellFull}>
                              <Text style={styles.cellHead}>
                                export order no.{" "}
                              </Text>
                              <Text style={styles.cellValue}>{""}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.documentBody}>
                  <View style={styles.tableRow}>
                    {batch.containers.length > 0 && (
                      <View style={styles.tableWrapperRight}>
                        <View style={styles.tableRowFlexStart}>
                          <Text style={styles.dataCellSCenter}>{""}</Text>
                          <Text style={styles.numberCell}>{"number"}</Text>
                          <View>
                            <View style={styles.tableRow}>
                              <View style={styles.tableRowCell}>
                                <Text style={styles.dataHead}>
                                  {"marked weight"}
                                </Text>
                                <View style={styles.weightWrapperHead}>
                                  <View style={styles.square}></View>
                                  <Text>kilos</Text>
                                </View>
                                <Text style={styles.marginLeftSmall}>or</Text>
                                <View style={styles.weightWrapper}>
                                  <View style={styles.checkBox}>
                                    <View style={styles.square}></View>
                                    <Text style={styles.firstLine}>{"x"}</Text>
                                    <View style={styles.secondLine} />
                                  </View>
                                  <Text>Lbs.</Text>
                                </View>
                              </View>
                            </View>
                            <View style={styles.tableRow}>
                              <Text style={styles.dataCellCenter}>
                                {"Gross"}
                              </Text>
                              <Text style={styles.dataCellCenter}>
                                {"Tare"}
                              </Text>
                              <Text style={styles.dataCellCenter}>{"Net"}</Text>
                            </View>
                          </View>
                        </View>
                        {batch.containers.map(
                          (item, index) =>
                            index % 2 === 0 && (
                              <View style={styles.tableRowFlexStart}>
                                <Text style={styles.dataCellSCenter}>
                                  {index < 10 ? `0${index + 1}` : index + 1}
                                </Text>
                                <Text style={styles.numberCell}>
                                  {item.container_number}
                                </Text>
                                <Text style={styles.dataCellCenter}>
                                  {item.gross_weight}
                                </Text>
                                <Text style={styles.dataCellCenter}>
                                  {item.tare_weight}
                                </Text>
                                <Text style={styles.dataCellCenter}>
                                  {item.net_weight}
                                </Text>
                              </View>
                            )
                        )}
                      </View>
                    )}
                    {batch.containers.length > 1 && (
                      <View style={styles.tableWrapperLeft}>
                        <View style={styles.tableRowFlexStart}>
                          <Text style={styles.dataCellSCenter}>{""}</Text>
                          <Text style={styles.numberCell}>{"number"}</Text>
                          <View>
                            <View style={styles.tableRow}>
                              <View style={styles.tableRowCell}>
                                <Text style={styles.dataHead}>
                                  {"marked weight"}
                                </Text>
                                <View style={styles.weightWrapperHead}>
                                  <View style={styles.square}></View>
                                  <Text>kilos</Text>
                                </View>
                                <Text style={styles.marginLeftSmall}>or</Text>
                                <View style={styles.weightWrapper}>
                                  <View style={styles.checkBox}>
                                    <View style={styles.square}></View>
                                    <Text style={styles.firstLine}>{"x"}</Text>
                                    <View style={styles.secondLine} />
                                  </View>
                                  <Text>Lbs.</Text>
                                </View>
                              </View>
                            </View>
                            <View style={styles.tableRow}>
                              <Text style={styles.dataCellCenter}>
                                {"Gross"}
                              </Text>
                              <Text style={styles.dataCellCenter}>
                                {"Tare"}
                              </Text>
                              <Text style={styles.dataCellCenter}>{"Net"}</Text>
                            </View>
                          </View>
                        </View>
                        {batch.containers.map(
                          (item, index) =>
                            index % 2 !== 0 && (
                              <View style={styles.tableRowFlexStart}>
                                <Text style={styles.dataCellSCenter}>
                                  {index < 10 ? `0${index + 1}` : index + 1}
                                </Text>
                                <Text style={styles.numberCell}>
                                  {item.container_number}
                                </Text>
                                <Text style={styles.dataCellCenter}>
                                  {item.gross_weight}
                                </Text>
                                <Text style={styles.dataCellCenter}>
                                  {item.tare_weight}
                                </Text>
                                <Text style={styles.dataCellCenter}>
                                  {item.net_weight}
                                </Text>
                              </View>
                            )
                        )}
                      </View>
                    )}
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.totalWrapper} wrap={false}>
                  <View style={styles.tableRowTotal}>
                    <View style={styles.tableTotal}>
                      <View style={styles.tableRow}>
                        <View style={styles.smallCell}>
                          <Text style={styles.totalLabel}>Total (in Lbs.)</Text>
                        </View>
                        <View style={styles.tableCellExS}>
                          <Text style={styles.totalLabel}>
                            {batch.gross_weight}
                          </Text>
                        </View>
                        <View style={styles.tableCellExS}>
                          <Text style={styles.totalLabel}>
                            {batch.tare_weight}
                          </Text>
                        </View>
                        <View style={styles.tableCellExS}>
                          <Text style={styles.totalLabel}>
                            {batch.net_weight}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.flexStartRow}>
                      <View>
                        <View style={styles.tableWrapperNumber}>
                          <View style={styles.tableRow}>
                            <View style={styles.smallCell}>
                              <Text style={styles.cellHeadCenter}>
                                shipment number
                              </Text>
                            </View>
                          </View>
                          <View style={styles.tableRow}>
                            <View style={styles.flexCenterCell}>
                              <Text style={styles.cellValue}>
                                {shipment_number}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.signatureBlockLeft}>
                        <View style={styles.tableRow}>
                          <Text style={styles.tableCellHeadAuto}>
                            data received
                          </Text>
                          <Text style={styles.fieldData}></Text>
                        </View>
                        <View style={styles.textCenter}>
                          <Text style={styles.cellValue}></Text>
                          <Text style={styles.cellHeadWithBorder}>
                            receiving signature
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.signatureBlockFlexEnd}>
                      <View style={styles.textCenter}>
                        <Text style={styles.cellValue}>
                          {shipping_signature}
                        </Text>
                        <Text style={styles.cellHeadWithBorder}>
                          shipping signature
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.footer} fixed>
                  <View style={styles.footerTable}>
                    <Text>{pk_fo}</Text>
                    <Text>{rev}</Text>
                    <Text>{data.footer.date}</Text>
                  </View>
                  <Text style={styles.footerDocName}>{document_owner}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};



export default ShippingMemorandumReport;