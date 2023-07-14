const dotenv = require("dotenv");
dotenv.config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    const items = response.records.map((item) => {
      const { id, fields } = item;

      const { price, category, image, title, dimensions } = fields;
      const { url } = image[0];

      return {
        id,
        price,
        category,
        image: url,
        title,
        dimensions,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
