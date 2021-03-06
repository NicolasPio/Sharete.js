/**
 * Sharete.js
 * Create your social share buttons easily customizable
 *
 * @author Nicolas Pio <nicolaspiof@gmail.com>
 */
;(function () {
  'use strict'

  function Sharete (selector) {
    if (!this) {
      return new Sharete(selector)
    }

    this.currentElement = null
    this.currentUrl = encodeURI(window.location.href)
    this.pageTitle = document.querySelector('title').text

    this.setElement(selector)
  }

  /**
   * Get element passed by user and save this element
   * And save with Array
   * @param  {String} selector
   * @return {void}
   */
  Sharete.prototype.setElement = function (selector) {
    var nodeList = document.querySelectorAll(selector)
    var currentElement = Array.prototype.slice.call(nodeList)

    this.currentElement = currentElement
  }

  /**
   * Retrive element saved
   * @return {Array}
   */
  Sharete.prototype.getElement = function () {
    return this.currentElement
  }

  Sharete.prototype.handleClick = function (linkToShare) {
    if (!linkToShare) {
      return
    }

    this.currentElement.forEach(function (el) {
      el.addEventListener('click', function () {
        window.open(linkToShare, '_blank')
      })
    })
  }

  /**
   * Share on Facebook
   * @return {void}
   *
   * todo:
   * - Customize data to share
   */
  Sharete.prototype.facebook = function (param) {
    try {
      if (!param.appId) {
        throw new Error('Facebook app_id not found')
      }
    } catch (e) {
      console.log(e)
    }

    var share = 'https://www.facebook.com/dialog/share'
    share += '?app_id=' + param.appId
    share += '&href=' + this.currentUrl
    share += '&redirect_uri=' + this.currentUrl

    this.handleClick(share)
  }

  /**
   * Share on Twitter
   * @param  {Object} params - text, hashtags, via, url
   * @return {void}
   *
   */
  Sharete.prototype.twitter = function (params) {
    var share = 'https://twitter.com/intent/tweet'

    if (params !== undefined) {
      if (typeof params.text === 'undefined') {
        params.text = ''
      }

      if (typeof params.hashtags === 'undefined') {
        params.hashtags = ''
      }

      if (typeof params.url === 'undefined') {
        params.url = this.currentUrl
      }

      share += '?url=' + params.url
      share += '&text=' + params.text
      share += '&hashtags=' + params.hashtags
    }

    this.handleClick(share)
  }

  Sharete.prototype.gplus = function () {
    var share = 'https://plus.google.com/share?url='
    share += this.currentUrl

    this.handleClick(share)
  }

  Sharete.prototype.pinterest = function (params) {
    var share = 'https://pinterest.com/pin/create/button/?url='
    var img = document.querySelector('img').getAttribute('src')

    if (document.querySelector('meta[property="og:image"]')) {
      img = document.querySelector('meta[property="og:image"]').getAttribute('content')
    }

    if (params !== undefined) {
      if (typeof params.image !== 'undefined') {
        img = params.image
      }
    }

    share += this.currentUrl
    share += '&media=' + encodeURI(img)

    this.handleClick(share)
  }

  Sharete.prototype.whatsapp = function () {
    var share = 'whatsapp://send?text='
    share += this.currentUrl

    this.handleClick(share)
  }

  // Expose Sharete to global scope
  window.Sharete = Sharete
})()
