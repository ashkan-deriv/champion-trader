import { transformCandleData, transformTickData } from '../transformChartData';

describe('transformCandleData', () => {
  it('should transform single candle data to ohlc format', () => {
    const input = {
      candles: [{
        openEpochMs: 1644825600,
        open: '100',
        high: '110',
        low: '90',
        close: '105',
        closeEpochMs: 1644829200
      }]
    };

    const expected = {
      msg_type: 'ohlc',
      ohlc: {
        open_time: 1644825600,
        open: '100',
        high: '110',
        low: '90',
        close: '105',
        epoch: 1644829200
      }
    };

    expect(transformCandleData(input)).toEqual(expected);
  });

  it('should transform multiple candles data to candles format', () => {
    const input = {
      candles: [
        {
          openEpochMs: 1644825600,
          open: '100',
          high: '110',
          low: '90',
          close: '105',
          closeEpochMs: 1644829200
        },
        {
          openEpochMs: 1644829200,
          open: '105',
          high: '115',
          low: '95',
          close: '110',
          closeEpochMs: 1644832800
        }
      ]
    };

    const expected = {
      msg_type: 'candles',
      candles: [
        {
          open_time: 1644825600,
          open: '100',
          high: '110',
          low: '90',
          close: '105',
          epoch: 1644829200
        },
        {
          open_time: 1644829200,
          open: '105',
          high: '115',
          low: '95',
          close: '110',
          epoch: 1644832800
        }
      ]
    };

    expect(transformCandleData(input)).toEqual(expected);
  });
});

describe('transformTickData', () => {
  it('should transform single tick data to tick format', () => {
    const input = {
      instrumentId: 'R_100',
      ticks: [{
        epochMs: 1644825600000,
        ask: '100.5',
        bid: '100.3',
        price: '100.4'
      }]
    };

    const expected = {
      msg_type: 'tick',
      instrumentId: 'R_100',
      tick: {
        epoch: 1644825600,
        ask: '100.5',
        bid: '100.3',
        quote: '100.4'
      }
    };

    expect(transformTickData(input)).toEqual(expected);
  });

  it('should transform multiple ticks data to history format', () => {
    const input = {
      instrumentId: 'R_100',
      ticks: [
        {
          epochMs: 1644825600000,
          ask: '100.5',
          bid: '100.3',
          price: '100.4'
        },
        {
          epochMs: 1644825601000,
          ask: '100.6',
          bid: '100.4',
          price: '100.5'
        }
      ]
    };

    const expected = {
      msg_type: 'history',
      instrumentId: 'R_100',
      history: [
        {
          epoch: 1644825600,
          ask: '100.5',
          bid: '100.3',
          quote: '100.4'
        },
        {
          epoch: 1644825601,
          ask: '100.6',
          bid: '100.4',
          quote: '100.5'
        }
      ]
    };

    expect(transformTickData(input)).toEqual(expected);
  });
});
