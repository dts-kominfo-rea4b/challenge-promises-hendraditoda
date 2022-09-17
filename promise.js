const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const dataTheaterIXX = await promiseTheaterIXX();
    const dataTheaterVGC = await promiseTheaterIXX();

    const dataVGC = dataTheaterVGC.filter((res) => res.hasil === emosi);
    const dataIXX = dataTheaterIXX.filter((res) => res.hasil === emosi);

    return dataVGC.length + dataIXX.length;
  } catch (error) {}
};

module.exports = {
  promiseOutput,
};
