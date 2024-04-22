import type { DateTimeFormatOptions } from '@intlify/core-base'

const dayjs = useDayjs()

export const useUi = () => {
  const intlDate = (date:Date, locale:string, fullDate:boolean) => {
    const options:DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric'
    }
    if (fullDate) {
      options.day = 'numeric'
      options.month = 'long'
      options.year = '2-digit'
    }
    return new Intl.DateTimeFormat(locale, options).format(date)
  }

  const splitByChar = (value: string | number, char: string) => {
    return String(value).split(char)[0]
  }

  const genDateFormat = (format: string) => {
    return dayjs(new Date()).format(format)
  }

  const getLastHour = () => {
    return dayjs(new Date()).subtract(1, 'hour').format('HH')
  }

  const getMinute = (format: string) => {
    return dayjs(new Date()).format(format)
  }

  const airDiffusionColor = (airDiffusion: number) => {
    if (airDiffusion === 25) {
      return 'text-rose-600'
    } else if (airDiffusion === 50) {
      return 'text-orange-600'
    } else if (airDiffusion === 75) {
      return 'text-sky-600'
    } else if (airDiffusion === 100) {
      return 'text-emerald-600'
    }
  }

  const uvColor = (uv: number) => {
    if (uv < 3) {
      return 'text-emerald-600'
    } else if (uv >= 3 && uv < 6) {
      return 'text-sky-600'
    } else if (uv >= 6 && uv < 8) {
      return 'text-orange-600'
    } else if (uv >= 8 && uv < 11) {
      return 'text-rose-600'
    } else if (uv >= 11) {
      return 'text-red-600'
    }
  }

  const humidityColor = (humidity: number) => {
    if (humidity < 20) {
      return 'text-stone-500'
    } else if (humidity >= 20 && humidity < 40) {
      return 'text-emerald-500'
    } else if (humidity >= 40 && humidity < 60) {
      return 'text-teal-500'
    } else if (humidity >= 60 && humidity < 80) {
      return 'text-sky-500'
    } else if (humidity >= 80) {
      return 'text-blue-500'
    }
  }

  const weatherColor = (weather: string) => {
    if (weather === '맑음') {
      return 'text-yellow-600'
    } else if (weather === '구름 많음') {
      return 'text-sky-600'
    } else if (weather === '흐림') {
      return 'text-yellow-600'
    }
  }

  const temperatureColor = (temperature: string) => {
    const temperture = parseInt(temperature)
    if (temperture >= 30) {
      return 'text-orange-600'
    } else if (temperture < 30 && temperture >= 15) {
      return 'text-orange-300'
    } else if (temperture < 15 && temperture >= 5) {
      return 'text-sky-600'
    } else if (temperture < 5) {
      return 'text-blue-600'
    }
  }

  return {
    intlDate,
    splitByChar,
    genDateFormat,
    getLastHour,
    getMinute,
    airDiffusionColor,
    uvColor,
    humidityColor,
    weatherColor,
    temperatureColor
  }
}

