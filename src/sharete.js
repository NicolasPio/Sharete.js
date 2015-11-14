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
    this.currentUrl = window.location.href
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

  Sharete.prototype.eventClick = function (linkToShare) {
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
    share += '&href=' + encodeURI(this.currentUrl)
    share += '&redirect_uri=' + encodeURI(this.currentUrl)

    this.eventClick(share)
  }

  Sharete.prototype.twitter = function (params) {
    var share = 'https://twitter.com/share'
    share += '?url=' + encodeURI(this.currentUrl)

    if (params !== undefined) {
      if (typeof text === undefined) {
        params.text = ''
      }

      if (typeof text === undefined) {
        params.hashtags = ''
      }

      share += '&text=' + params.text
      share += '&hashtags=' + params.hashtags
    }

    this.eventClick(share)
  }

  // Expose Sharete to global scope
  window.Sharete = Sharete
})()
